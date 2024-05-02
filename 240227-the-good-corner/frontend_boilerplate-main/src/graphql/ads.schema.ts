import { gql } from "@apollo/client";

export const GET_ADS = gql`
  query AdsQuery {
    ad {
      description
      id
      imgUrl
      location
      owner
      price
      title
      tags {
        title
        id
      }
      category {
        title
        id
      }
    }
  }
`;

export const GET_AD = gql`
  query AdQuery($id: Float!) {
    adByid(id: $id) {
      description
      id
      imgUrl
      location
      owner
      price
      title
      tags {
        title
      }
      category {
        title
      }
    }
  }
`;

export const POST_AD = gql`
  mutation PostAd(
    $title: String!
    $description: String!
    $owner: String!
    $price: Float!
    $imgUrl: String!
    $location: String!
    $category: String!
    $tags: String!
  ) {
    postAd(
      title: $title
      description: $description
      owner: $owner
      price: $price
      imgUrl: $imgUrl
      location: $location
      category: $category
      tags: $tags
    ) {
      id
      title
      description
      owner
      price
      imgUrl
      location
      category {
        title
      }
      tags {
        title
      }
    }
  }
`;

export const DELETE_AD = gql`
  mutation DeleteAd($id: Float!) {
    deleteAd(id: $id)
  }
`;

export const EDIT_AD = gql`
  mutation EditAd(
    $id: Float!
    $title: String!
    $description: String!
    $owner: String!
    $price: Float!
    $imgUrl: String!
  ) {
    editAd(
      id: $id
      title: $title
      description: $description
      owner: $owner
      price: $price
      imgUrl: $imgUrl
    ) {
      id
      title
      description
      owner
      price
      imgUrl
    }
  }
`;
