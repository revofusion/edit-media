
const extensions = new Set([
	"aac",
	"aiff",
	"ape",
	"au",
	"flac",
	"gsm",
	"it",
	"m3u",
	"m4a",
	"mid",
	"mod",
	"mp3",
	"mpa",
	"ogg",
	"pls",
	"ra",
	"s3m",
	"sid",
	"wav",
	"wma",
	"xm",
]);

export default function isAudio(filePath) {
    const extension = filePath.split('.').pop()
	return extensions.has(extension.toLowerCase());
}