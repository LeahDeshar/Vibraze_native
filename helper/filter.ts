export const tractTitleFilter = (title: string) => (track: any) =>
  track.title?.toLowerCase().includes(title.toLowerCase());
