import React, { useState,useEffect } from "react";
import TopDiv from "./TopDiv";
import {
  Container,
  Content,
  Header,
  Img,
  ImgDetails,
  Categories,
  ImgDetailsImage,
  JobDescription,
  JobAvaliable,
  Title,
  JobDetail,
  Company,
  Type,
  Button,
  Line,
  GlobalStyle
  
} from "./components/Card";
import { cards } from "./data/data";

const App: React.FC = () => {
  const [item, setItem] = useState(cards);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filterVisbile, setFilterVisbile] = useState<boolean>(false);



   
// i need this fun when i don't use useEffect Hook..

  // const filterItem = () => {
    
  //   const newItem = cards.filter((newVal) => {
  //     return newVal.categories.some((x: string) =>selected.includes(x)
  //   );;
  //   });
  //   console.log(selectedTags);
    
  //   console.log("🚀 ~ file: App.tsx ~ line 38 ~ newItem ~ newItem", newItem)

  //   setItem(newItem);
  // };

  let selected = [...selectedTags];
  const addButton = (x: string) => {
   
    selected.push(x);
   
    setSelectedTags( Array.from(new Set(selected)));

  };


  useEffect(() => {
    
    if (selectedTags.length < 1) {
      setItem(cards)
    }
    else {
      const newItem = cards.filter((newVal) => {
        return newVal.categories.some((x: string) =>selected.includes(x)
      );
      });
      
  
      setItem(newItem);
    }
  }, [selectedTags])
  
  
  
  return (
    <>
       <GlobalStyle />
      <Header>
        <Img></Img>
      </Header>
      {filterVisbile ? (<TopDiv setFilterVisbile={setFilterVisbile}  setItem={setItem}  setSelectedTags={setSelectedTags} selectedTags={selectedTags }/>) : ("")}

      <Container >
        {item.map((item, index) => (
          <Content key={index}>
            <ImgDetails>
              <>
                <ImgDetailsImage src={item.img}></ImgDetailsImage>
                <JobDescription>
                  <JobAvaliable>
                    <Company>{item.company}</Company>
                    {item.fnew == "NEW!" ? <Type type='new'>{item.fnew}</Type> : ""}
                    {item.featured=="FEATURED"? <Type type='featured'>{item.featured}</Type>:""}

                   
                  </JobAvaliable>

                  <Title>{item.title}</Title>

                  <JobDetail>{item["job-detail"]}</JobDetail>
                </JobDescription>
              </>
              <Line/>
            </ImgDetails>
           
            <Categories>
              {item.categories.map((x) => (
                <Button
                  onClick={() => {
                    addButton(x);
                    setFilterVisbile(true);
                  }}
                >
                  {x}
                </Button>
              ))}
            </Categories>
          </Content>
        ))}
        </Container>
       
    </>
  );
};

export default App;
