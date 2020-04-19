import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//components
import bookIcon from "../assets/images/book2.png";
import movieIcon from "../assets/images/movie2.png";
import restaurantIcon from "../assets/images/restaurant2.png";
import musicIcon from "../assets/images/album.png";
import axios from "axios";


//styles
import {
  KardSelectorContainer,
  WhichKardWrapper,
  KardCategoryOutterContainer,
  KardCategoryTitle,
  MainKardImage,
  KardCategoryContainer,
  MainKardText,
} from "../App.styles";

const Public = ({ match }) => {
    
  const [faveAlbum, setFaveAlbum] = useState(null);
  const [faveBook, setFaveBook] = useState(null);
  const [faveResto, setFaveResto] = useState(null);
  const [faveMovie, setFaveMovie] = useState(null);

  console.log(faveResto)

  useEffect(() => {
    
    Promise.all([axios.get(`http://localhost:8001/api/kard/${match.params.nickname}`)])
    .then((response) => {
  
      console.log(response)
  
      const { album, book, movie, resto } = response[0].data[0].categories;
      setFaveAlbum(album);
      setFaveBook(book);
      setFaveMovie(movie);
      setFaveResto(resto);
      
    })
    .catch((error) => {
      console.log(error);
    });

  }, []);





  return (
    <>
      <>
        <WhichKardWrapper>
          <KardSelectorContainer>
            {/* album begins */}
            <KardCategoryOutterContainer>
              <KardCategoryTitle
                style={{ background: "#e6fff7", color: "black" }}
              >
                Album
              </KardCategoryTitle>
              <KardCategoryContainer
                style={{
                  boxShadow: "7px 7px 5px 0px #e6fff7",
                }}
              >
                {(faveAlbum === null || faveAlbum === undefined) ? (
                  <>
                      <MainKardImage src={musicIcon} alt="" />
                  </>
                ) : (
                  <>
                    <a
                      href={`${faveAlbum.collectionViewUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MainKardImage
                        style={{
                          minWidth: "100px",
                          minHeight: "100px",
                        }}
                        src={faveAlbum.artworkUrl60}
                        alt="Album cover"
                      />
                    </a>
                    <MainKardText>{faveAlbum.collectionName}</MainKardText>
                  </>
                )}
              </KardCategoryContainer>
            </KardCategoryOutterContainer>

            {/* book begins */}
            <KardCategoryOutterContainer>
              <KardCategoryTitle style={{ background: "#45806d" }}>
                Book
              </KardCategoryTitle>
              <KardCategoryContainer
                style={{ boxShadow: "7px 7px 5px 0px #45806d" }}
              >
                {(faveBook === null || faveBook === undefined) ? (
                  <>
                    
                      <MainKardImage src={bookIcon} alt="" />
                    
                  </>
                ) : (
                  <>
                     <a
                      href={`https://www.goodreads.com/book/show/${faveBook.best_book.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      > 
                      <MainKardImage
                        style={{
                          minWidth: "100%",
                          minHeight: "100%",
                        }}
                        className="Kard-dashboard"
                        src={faveBook.best_book.image_url}
                        alt="Book cover"
                      />
                      </a>
                    <MainKardText>{faveBook.best_book.title}</MainKardText>
                  </>
                )}
              </KardCategoryContainer>
            </KardCategoryOutterContainer>

            {/* movie begins */}
            <KardCategoryOutterContainer>
              <KardCategoryTitle style={{ background: "#6b8079" }}>
                Movie
              </KardCategoryTitle>
              <KardCategoryContainer
                style={{ boxShadow: "7px 7px 5px 0px #6b8079" }}
              >
                {(faveMovie === null || faveMovie === undefined) ? (
                  <>
                    
                      <MainKardImage src={movieIcon} alt="" />
                    
                  </>
                ) : (
                  <>
                    <a
                      href={`https://www.themoviedb.org/movie/${faveMovie.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MainKardImage
                        style={{
                          minWidth: "100%",
                          minHeight: "100%",
                        }}
                        className="Kard-dashboard"
                        src={`https://image.tmdb.org/t/p/w500${faveMovie.poster_path}`}
                        alt="Book cover"
                      />
                    </a>
                    <MainKardText>{faveMovie.title}</MainKardText>
                  </>
                )}
              </KardCategoryContainer>
            </KardCategoryOutterContainer>

            {/* restaurent begins */}
            <KardCategoryOutterContainer>
              <KardCategoryTitle
                style={{ background: "#d6fff2", color: "black" }}
              >
                Restaurant
              </KardCategoryTitle>
              <KardCategoryContainer
                style={{ boxShadow: "7px 7px 5px 0px #d6fff2" }}
              >
                {(faveResto === null || faveResto === undefined) ? (
                  <>
                    
                    

                      <MainKardImage src={restaurantIcon} alt="" />
                           
                  </>
                ) : (
                  <>
                    
                    <a
                      href={`https://www.google.com/maps/place/?q=place_id:${faveResto.place_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <MainKardImage
                        style={{
                          minWidth: "100%",
                          minHeight: "100%",
                        }}
                        className="resto_thumbnail"
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=${faveResto.photos[0].photo_reference}&key=AIzaSyAcLOiaEp4qBb1Wt2V_dyR6Ze1sgIEfUhs`}
                        alt="Restaurant"
                      />
                    </a>
                    <MainKardText>{faveResto.name}</MainKardText>
                  </>
                )}
              </KardCategoryContainer>
            </KardCategoryOutterContainer>
          </KardSelectorContainer>
        </WhichKardWrapper>
      </>
    </>
  );
};

export default Public;