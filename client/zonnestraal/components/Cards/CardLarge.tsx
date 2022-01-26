import React, { useState } from 'react'
import { DefaultLink, PrimaryButton, SecondaryButton } from '../Buttons';
import styled from 'styled-components';
import Link from 'next/link';
import { Library } from '../../interfaces/models/library';
import { FiBook } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import { Media } from '../../interfaces/models/media';
import ReactPaginate from "react-paginate";
import ReservationButton from '../Buttons/ReservationBtn';
import { GetAllBooks } from "../../interfaces/api/getAllBooks";


/* interface Props {
  data: Book[];
} */

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    flex-direction: column;
  }
`

const StyledCard = styled.div`
  position: relative;
  margin-bottom:${({ theme }) => theme.margins.normal};
  cursor: pointer;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 100%;
    margin-right:${({ theme }) => theme.margins.normal};
  }
`

const GreyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGrey};
  padding: ${({ theme }) => theme.paddings.normal};
  padding-top:${({ theme }) => theme.margins.large};
  transition: background-color 1s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    align-items: start;
    flex-direction: row;
    justify-content: space-around;
  }
`

const IconContainer = styled.div`
  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.darkBlue};
}

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 10%;

    svg {
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
`

const TextContainer = styled.div`
  margin-top:${({ theme }) => theme.margins.small};
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 50%;
    margin-top: 0;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:${({ theme }) => theme.margins.normal};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    width: 30%;
    margin-top: 0;

    a {
      width: 100%;
    }
  }
`

const ItemTitle = styled.h3`
  display: block;
  width: 100%;
  margin-bottom:${({ theme }) => theme.margins.extraSmall};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    font-size:${({ theme }) => theme.fontSizes.headline6};
  }
`

const ItemDescription = styled.div`
  height: 100px;
  width: 100%
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const SubItemTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.buttonText};
  color: ${({ theme }) => theme.colors.darkBlue};
  display: block;
  margin-top:${({ theme }) => theme.margins.extraSmall};
  text-transform: uppercase;
  font-weight: 600;
`

const Group = styled.div`
  width: 50%;
`

const DescriptionGroup = styled.div`
  display: block;
  width: 100%;
`

const PaginationContainer = styled.div`
  margin-top:${({ theme }) => theme.margins.normal};
  margin-bottom:${({ theme }) => theme.margins.normal};

  .paginationButtons {
    display: flex;
    align-items: center;

    li {
      margin-right:${({ theme }) => theme.margins.normal};
    }

    a {
      color: ${({ theme }) => theme.colors.darkBlue};
      cursor: pointer;
    }
  }

  .nextBtn {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .previousBtn {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .activeBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width:40px;
    height: 40px;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primaryColor};
    padding: ${({ theme }) => theme.paddings.extraSmall};
  }
`

const CardLarge = ({ books, searchTerm, selected } : {books: GetAllBooks, searchTerm: string, selected: any}) => {
  if (!books) {
    return 'no data';
  }

  const [pageNumber, setPagenNumber] = useState(0);
  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;

  const filteredBooks = books.filter((b:any) => {
    if (selected == undefined) {
      return b
    } else if (b.type.title == selected) {
      return b
    } 
  })

  const filteredData = filteredBooks.filter((b:any) => {
    if (searchTerm == "") {
      return b
    } else if (b.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return b
    } else if (b.author.toLowerCase().includes(searchTerm.toLowerCase())) {
      return b 
    }
  })

  const displayData = filteredData.slice(pagesVisited, pagesVisited + dataPerPage).map((b:any) => {
  const rentArray = b.rent
  const lastRent = rentArray[rentArray.length -1]

    return (
      <CardsContainer>
          <Link href={'/bibliotheek/' + b.id}>
            <StyledCard key={b.id}>
              <GreyContainer>

                <IconContainer>
                  {(() => {
                    switch (b.type.title) {
                      case 'Boek':
                        return <FiBook/>;
                      case 'Map':
                        return <FiFolder/>;
                      default:
                        return <FiBookOpen/>;
                      }
                  })()}
                </IconContainer>

                <TextContainer>
                  <ItemTitle>{b.title}</ItemTitle>

                  <Group>
                    <SubItemTitle>Author</SubItemTitle>
                    <p>{b.author ? b.author : 'geen auteur'}</p>
                  </Group>

                  <Group>
                    <SubItemTitle>Publisher</SubItemTitle>
                    <p>{b.publisher ? b.publisher : 'geen publisher'}</p>
                  </Group>

                  <Group>
                    <SubItemTitle>Type</SubItemTitle>
                    <p>{b.type.title}</p>
                  </Group>

                  <Group>
                    <SubItemTitle>Serienummer</SubItemTitle>
                    <p>{b.serial}</p>
                  </Group>

                  <Group>
                    <SubItemTitle>Status</SubItemTitle>
                    {lastRent == undefined ? 'Beschikbaar' : lastRent?.returned == 'Y' || undefined ? 'Beschikbaar' : 'Niet beschikbaar'}
                  </Group>

                  <DescriptionGroup>
                    <SubItemTitle>Beschrijving</SubItemTitle>
                    <ItemDescription dangerouslySetInnerHTML={{__html:b.description.replace(/\\r\\n/g,'')}}></ItemDescription>
                  </DescriptionGroup>
                </TextContainer>

                <ButtonContainer>
                  <SecondaryButton title="Uitlenen"/>
                  <ReservationButton title="Reserveren" name={b.id}/>
                </ButtonContainer>

              </GreyContainer>

            </StyledCard>
          </Link>
      </CardsContainer>
    )
  })

  const pageCount = Math.ceil(books.length / dataPerPage);

  const changePage = ({ selected }:any) => {
    setPagenNumber(selected);
  }

  return (
    <div>
      {displayData}
      <PaginationContainer>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          activeClassName={"activeBtn"}
        />
      </PaginationContainer>
    </div>
  );
}

export default CardLarge;


{/* 
<div>
  {displayData}
  <ReactPaginate
    previousLabel={"Previous"}
    nextLabel={"Next"}
    pageCount={pageCount}
    onPageChange={changePage}
  />
</div> 
*/}

/* const displayData = data.slice(pagesVisited, pagesVisited + dataPerPage).map(b => {
  return (
    <CardsContainer>
        {data.filter((b) => {
          if (searchTerm == "") {
            return b
          } else if (b.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return b
          } else if (b.author.toLowerCase().includes(searchTerm.toLowerCase())) {
            return b 
          }
        }).map(b => (
          <Link href={'/bibliotheek/' + b.id}>
            <StyledCard key={b.id}>
              <GreyContainer>

                <IconContainer>
                  {(() => {
                    switch (b.type.title) {
                      case 'Boek':
                        return <FiBook/>;
                      case 'Map':
                        return <FiFolder/>;
                      default:
                        return <FiBookOpen/>;
                      }
                  })()}
                </IconContainer>

                <TextContainer>
                  <ItemTitle>{b.title}</ItemTitle>

                  <Group>
                    <SubItemTitle>Author</SubItemTitle>
                    <p>{b.author ? b.author : 'geen auteur'}</p>
                  </Group>

                  <Group>
                    <SubItemTitle>Publisher</SubItemTitle>
                    <p>{b.publisher ? b.publisher : 'geen publisher'}</p>
                  </Group>

                  <Group>
                    <SubItemTitle>Type</SubItemTitle>
                    <p>{b.type.title}</p>
                  </Group>

                  <Group>
                    <SubItemTitle>Serienummer</SubItemTitle>
                    <p>{b.serial}</p>
                  </Group>

                  <Group>
                    <SubItemTitle>Status</SubItemTitle>
                    <p>beschikbaar</p>
                  </Group>

                  <DescriptionGroup>
                    <SubItemTitle>Beschrijving</SubItemTitle>
                    <ItemDescription dangerouslySetInnerHTML={{__html:b.description.replace(/\\r\\n/g,'')}}></ItemDescription>
                  </DescriptionGroup>
                </TextContainer>

                <ButtonContainer>
                  <SecondaryButton title="Uitlenen"/>
                  <PrimaryButton title="Reserveren"/>
                </ButtonContainer>

              </GreyContainer>

            </StyledCard>
          </Link>
        ))}
      </CardsContainer>
  )
}) */

