import React, { useState } from 'react';
import client from '../../lib/apollo-client';
import { gql } from "@apollo/client";
import styled from 'styled-components';


interface Props {
  
}

export const ContentContainer = styled.div`
  padding: ${({ theme }) => theme.paddings.medium} ${({ theme }) => theme.paddings.normal};

  @media (min-width: ${({theme}) => theme.width.desktop}) {
    padding: ${({ theme }) => theme.paddings.medium} ${({ theme }) => theme.paddings.extraLarge};
  }
`

const ItemDescription = styled.div`
  height: 10rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`


export async function getServerSideProps(context) {
  const {params} = context
  const {id} = params

  const { data } = await client.query({
    query: gql`
    query {
      getLibraryById(id: ${id}){
       serial
       title
       description
       publisher
       author
       year
       created_on
       edited_on
       hidden
       language
       type {
         id
         title
       }
       location {
         id
         title
         street
         number
         zip
         city
         country
         lat
         lng
       }
       rent {
         name
         rent_from
         rent_till
         returned
       }
       reservation {
         id
         name
         deleted
         created_on
       }
     }
    }
    `
  });
  
  return {
    props: {
      detail: data.getLibraryById,
    },
 };
}

const Detail = ({ detail }) => {
  const cleanDescription = detail.description.replace(/\\r\\n/g,'</br>');

  if (!detail) {
    return <p>Sorry, er is geen data te vinden voor dit boek.</p>
  } 

  return (
    <ContentContainer>
      <h2>{ detail.title }</h2>
      <ItemDescription dangerouslySetInnerHTML={{__html:cleanDescription}}></ItemDescription>
    </ContentContainer>
  );
}

export default Detail;