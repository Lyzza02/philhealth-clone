export interface Partner {
    title: string;
    body: string;
  }
  
  export const getPartners = async () => {
    const partner = await fetch("http://localhost:5000/get-partners").then(async (res)=>{
      const data: Array<Partner> = await res.json();
      return data;
    });
    return partner;
  }