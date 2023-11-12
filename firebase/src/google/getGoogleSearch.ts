import {search} from "./lib";

export const getGoogleSearch = async (query: string): Promise<{ description: string, title: string, url: string }[]> => {
  try {
    const options = {
      page: 0,
      safe: false, // Safe Search
      parse_ads: false, // If set to true sponsored results will be parsed
      additional_params: {
        // add additional parameters here, see https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters and https://www.seoquake.com/blog/google-search-param/
        hl: "en",
      },
    };

    const {results} = await search(query, options);
    const slicedGoogleResults = results.slice(0, 10);
    return slicedGoogleResults;
  } catch (e) {
    console.error(e);
    return [];
  }
};
