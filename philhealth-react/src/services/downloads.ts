export interface Download {
  title: string;
  body: string;
}

export const getDownloads = async () => {
  const download = await fetch("http://localhost:5000/get-downloads").then(async (res) => {
    const data: Array<Download> = await res.json();
    return data;
  });
  return download;
}