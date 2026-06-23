export default function imageLoader({ src, width, quality }: any) {
  return `/${src}?w=${width}&q=${quality || 75}`;
}