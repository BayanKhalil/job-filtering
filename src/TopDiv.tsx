import React, { useEffect } from 'react';
import{TopArray,Button,Div} from './components/Card'
import { cards } from "./data/data";


interface TopDivProps {
  setFilterVisbile: React.Dispatch<React.SetStateAction<boolean>>;
  setItem: React.Dispatch<React.SetStateAction<{  id: string;
    company: string;
    title: string;
    img: string;
    "job-detail": string[];
    categories: string[];
    fnew: string;
    featured: string;
  }[]>>;
  
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  selectedTags: string[];
 
}

const TopDiv = (Props: TopDivProps) => {

 
  const filterSelectedItem= (index: number) => {
    
    const filteredArray = Props.selectedTags.filter((item,ind) => {
      return ind !== index
      
    });
    Props.setSelectedTags(Array.from(new Set(filteredArray)));
    
  };
   
  useEffect(() => {
       
    if (Props.selectedTags.length < 1) {
      Props.setItem(cards)
      Props.setFilterVisbile(false)
    }
     
  
  },)
// i need this fun when i don't use useEffect Hook..
  // const filterItem = () => {
    
  //   const newItem = cards.filter((newVal) => {
  //     return newVal.categories.some((x: string) =>!Props.selectedTags.includes(x)
  //   );;
  //   });
    
  //   console.log("🚀 ~ file: App.tsx ~ line 48 ~ newItem ~ newItem", newItem)

  //   Props.setItem(newItem);
  // };
    return (
      <TopArray  >
        <Div>{Props.selectedTags.map((x, index) =>
         <><Button key={index}>{x}</Button><Button clearThis='clearThis' onClick={() => { filterSelectedItem(index); } }>X</Button></>
        )}</Div>
        
        <Div name='clear'>
        <Button  onClick={() => { Props.setFilterVisbile(false); Props.setItem(cards); Props.setSelectedTags([]) }} > Clear</Button></Div>
      </TopArray>
      
      
    );
  };
export default TopDiv;
