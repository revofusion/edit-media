import { Button, Table, TextInput } from "flowbite-react";
import { useState, type FC } from "react";
import { VideoData, downloadFormat, getAllFormats } from "@os/invoke/yt-dlp";
import { HiDocumentDownload, HiDownload } from "react-icons/hi";
import ReactPlayer from 'react-player/youtube'
import superbytes from '../helpers/superbytes'
import { Tab } from "@headlessui/react";
import classnames from "classnames";
import { showInFinder } from "@os/invoke/showInFinder";
import * as Sentry from "@sentry/browser";
import { path } from "@os/Path";

const DownloadPage: FC = function () {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')
  const [videoInfo, setVideoInfo] = useState(null as VideoData | null)

  const download = async (format?: string) => {
    if (import.meta.env.VITE_BUILD_TARGET === 'web') {
      return setError('This feature is currently only available in the desktop version!')
    }

    if (loading) {
      return
    }

    setLoading(true)
    setError('')
    
    try {
      const downloadsDirectoryPath = await path.editMediaDownloadDir()
      const { error } = await downloadFormat(url, downloadsDirectoryPath, format)
      if (error) {
        console.error(error)
      }

      const formattedError = error.split('\n').filter(line => !line.startsWith('WARNING:')).join('\n')
      if (formattedError) {
        throw new Error(formattedError)
      } else {
        await showInFinder(downloadsDirectoryPath)
      }
    } catch (e) {
      console.error('Download error')
      setError(e.message || e)
      Sentry.captureException(e);
    } finally {
      setLoading(false)
    }
  }

  const loadLink = async () => {
    if (import.meta.env.VITE_BUILD_TARGET === 'web') {
      return setError('This feature is currently only available in the desktop version!')
    }

    setLoading(true)
    setVideoInfo(null)

    const parsedUrl = new URL(url).origin + new URL(url).pathname + '?v=' + new URL(url).searchParams.get('v')

    try {
      const videoInfo = await getAllFormats(parsedUrl)
      setVideoInfo(videoInfo)
    } catch (e) {
      console.error(e)
      setError(e)
      Sentry.captureException(e);
    } finally {
      setLoading(false)
    }
  }

  const videoUrl = videoInfo
    ? videoInfo.url || videoInfo.original_url
    : null

  const parsedVideoFormats: {
    resolution: string,
    formatCode: string,
    extension: string,
    fps: string,
    tbr: string,
    fileSize: string
  }[] = []
  const parsedAudioFormats: {
    resolution: string,
    formatCode: string,
    extension: string,
    fps: string,
    tbr: string,
    fileSize: string
  }[] = []

  if (videoInfo && videoInfo.formats) {
    // Sort by width and filesize
    let sortedFormats = videoInfo.formats
      .sort((a, b) => {
        const cmpr = b.width - a.width
        if (cmpr === 0) {
          return (b.filesize || b.filesize_approx) - (a.filesize || a.filesize_approx)
        }
        return cmpr
      })

    // Remove formats
    if (sortedFormats.some(_ => _.filesize || _.filesize_approx)) {
      sortedFormats = sortedFormats.filter(_ => (_.filesize || _.filesize_approx) && _.tbr)
    }

    // Deduplicate
    sortedFormats = sortedFormats.reduce((acc, current) => {
      const x = acc.find(item => item.ext === current.ext && (item.filesize || item.filesize_approx) === (current.filesize || current.filesize_approx));
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    for (const format of sortedFormats) {
      if (format.ext === 'mhtml') {
        continue
      }

      if (format.format.includes('audio only')) {
        parsedAudioFormats.push({
          resolution: format.resolution,
          formatCode: format.format.split(' ')[0],
          extension: format.ext,
          fps: format.fps,
          tbr: format.tbr?.toFixed(0),
          fileSize: superbytes(format.filesize || format.filesize_approx, true, 2)
        })
      } else {
        parsedVideoFormats.push({
          resolution: format.resolution,
          formatCode: format.format.split(' ')[0],
          extension: format.ext,
          fps: format.fps,
          tbr: format.tbr?.toFixed(0),
          fileSize: superbytes(format.filesize || format.filesize_approx, true, 2),
        })
      }
    }
  }

  return (
    <div className="h-full w-full flex">
      <div className="w-full flex flex-col py-8 px-10 overflow-scroll no-scrollbar space-y-10">
        {videoInfo && !videoUrl.includes('instagram') && (
          <div className="flex flex-col">
            {
              videoUrl.includes('twimg') || videoUrl.includes('tiktokcdn')
                ? <video controls autoPlay src={videoUrl} className="h-64"></video>
                : <ReactPlayer url={videoUrl} controls={true} height={300} />
            }
          </div>
        )}
        <div className="w-full flex flex-col justify-center">
          <label htmlFor="url" className="mr-2 dark:text-gray-300">Enter Youtube / Instagram / Twitter / Tiktok URL:</label>
          
          <TextInput 
            type="text" 
            id="url" 
            className="my-2 rounded-md" 
            placeholder="Enter URL here..."
            value={url}
            onInput={(e) => setUrl((e.target as HTMLTextAreaElement).value)}
          />

          <div className="flex w-full space-x-4">
            <Button color="primary" onClick={() => loadLink()} disabled={loading} className="w-1/2">
              <div className="flex items-center gap-x-2">
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <HiDocumentDownload className="text-xl" />
                )}
                Show Formats
              </div>
            </Button>
            <Button color="primary" onClick={() => download()} disabled={loading} className="w-1/2">
              <div className="flex items-center gap-x-2">
                {loading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <HiDownload className="text-xl" />
                )}
                Download Best Video + Audio
              </div>
            </Button>
          </div>

          {error && (
            <div className="mt-4 text-red-500">
              {error}
            </div>
          )}
        </div>

        <div className="w-full flex flex-col justify-center">
          {/* {JSON.stringify(videoInfo)} */}
          {videoInfo && (
            <Tab.Group as="div" className="block">
              {({ selectedIndex }) => (
                <>
                  <Tab.List className="grid grid-cols-3 gap-x-4">
                    {/* {['Videos', 'Audios'].map((feature, featureIndex) => (
                      <Tab className="ui-not-focus-visible:outline-none" key={feature}>
                        {feature}
                      </Tab>
                    ))} */}
                  </Tab.List>
                  <Tab.Panels className="overflow-scroll no-scrollbar xl:overflow-hidden rounded-4xl bg-slate-200">
                    <div className="-mx-5 flex">
                      {['Videos', 'Audios'].map((feature, featureIndex) => (
                        <Tab.Panel
                          static
                          key={feature}
                          className={classnames(
                            'transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                            feature === 'Videos' ? 'pl-5 pr-2' : 'pl-2 pr-5'
                          )}
                          style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                          aria-hidden={featureIndex !== selectedIndex}
                        >
                          {feature === 'Videos' && (
                            <div className="mb-2 dark:text-gray-300">Available {parsedAudioFormats.length ? 'Video' : 'Video + Audio'}</div>
                          )}
                          {feature === 'Videos' && (
                            <Table className="min-w-full xl:table-fixed">
                            <Table.Head>
                                <Table.HeadCell className="whitespace-nowrap rounded-l border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                  RES
                                </Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                  Ext
                                </Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap rounded-r border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                  FPS
                                </Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap rounded-r border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                  FR
                                </Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap rounded-r border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                  Size
                                </Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap rounded-r border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                  
                                </Table.HeadCell>
                              </Table.Head>
                              <Table.Body className="divide-y divide-gray-100 dark:divide-gray-700">
                                { parsedVideoFormats.map((_, index) => (
                                  <Table.Row className="text-gray-500 dark:text-gray-400" key={`video-${index}`}>
                                    <Table.Cell className="whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal">
                                      {_.resolution}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                                      {_.extension}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                      {_.fps}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                      {_.tbr}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                      {_.fileSize}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                      <HiDownload className="cursor-pointer w-6 h-6" onClick={() => download(_.formatCode)}/>
                                    </Table.Cell>
                                  </Table.Row>
                                ))}
                              </Table.Body>
                            </Table>
                          )}

                          {feature === 'Audios' && parsedAudioFormats.length ? (
                            <div className="mb-2 dark:text-gray-300">Available Audio</div>
                          ) : (<></>)}
                          {feature === 'Audios' && parsedAudioFormats.length ? (
                            <Table className="min-w-full xl:table-fixed">
                              <Table.Head>
                                <Table.HeadCell className="whitespace-nowrap rounded-l border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                  Res
                                </Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                  Ext
                                </Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap rounded-r border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                  FR
                                </Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap rounded-r border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                  Size
                                </Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap rounded-r border-x-0 bg-gray-50 py-3 px-4 text-left align-middle text-xs font-semibold uppercase text-gray-700 dark:bg-gray-700 dark:text-white">
                                  
                                </Table.HeadCell>
                              </Table.Head>
                              <Table.Body className="divide-y divide-gray-100 dark:divide-gray-700">
                                { parsedAudioFormats.map((_, index) => (
                                  <Table.Row className="text-gray-500 dark:text-gray-400" key={`audio-${index}`}>
                                    <Table.Cell className="whitespace-nowrap border-t-0 p-4 text-left align-middle text-sm font-normal">
                                      {_.resolution}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs font-medium text-gray-900 dark:text-white">
                                      {_.extension}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                      {_.tbr}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                      {_.fileSize}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap border-t-0 p-4 align-middle text-xs">
                                      <HiDownload className="cursor-pointer w-6 h-6" onClick={() => download(_.formatCode)}/>
                                    </Table.Cell>
                                  </Table.Row>
                                ))}
                              </Table.Body>
                            </Table>
                          ) : (<></>)}
                        </Tab.Panel>
                      ))}
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
                  </Tab.Panels>
                </>
              )}
            </Tab.Group>
          )}
        </div>
      </div>
    </div>
  );
};


export default DownloadPage;
