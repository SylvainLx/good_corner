import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type Ad = {
  __typename?: 'Ad';
  category: Category;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  imgUrl: Scalars['String']['output'];
  location: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  ads: Array<Ad>;
  id: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAd: Scalars['String']['output'];
  editAd: Ad;
  postAd: Ad;
  toto: Scalars['String']['output'];
  updateAd: Ad;
};


export type MutationDeleteAdArgs = {
  id: Scalars['Float']['input'];
};


export type MutationEditAdArgs = {
  description: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  imgUrl: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};


export type MutationPostAdArgs = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  imgUrl: Scalars['String']['input'];
  location: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  tags: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationTotoArgs = {
  id: Scalars['Float']['input'];
};


export type MutationUpdateAdArgs = {
  description: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  imgUrl: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  ad: Array<Ad>;
  adByid: Ad;
  category: Array<Category>;
  tag: Array<Tag>;
};


export type QueryAdByidArgs = {
  id: Scalars['Float']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  ads: Array<Ad>;
  id: Scalars['Float']['output'];
  title: Scalars['String']['output'];
};

export type AdsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AdsQueryQuery = { __typename?: 'Query', ad: Array<{ __typename?: 'Ad', description: string, id: number, imgUrl: string, location: string, owner: string, price: number, title: string, tags: Array<{ __typename?: 'Tag', title: string, id: number }>, category: { __typename?: 'Category', title: string, id: number } }> };

export type AdQueryQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type AdQueryQuery = { __typename?: 'Query', adByid: { __typename?: 'Ad', description: string, id: number, imgUrl: string, location: string, owner: string, price: number, title: string, tags: Array<{ __typename?: 'Tag', title: string }>, category: { __typename?: 'Category', title: string } } };

export type PostAdMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  imgUrl: Scalars['String']['input'];
  location: Scalars['String']['input'];
  category: Scalars['String']['input'];
  tags: Scalars['String']['input'];
}>;


export type PostAdMutation = { __typename?: 'Mutation', postAd: { __typename?: 'Ad', id: number, title: string, description: string, owner: string, price: number, imgUrl: string, location: string, category: { __typename?: 'Category', title: string }, tags: Array<{ __typename?: 'Tag', title: string }> } };

export type DeleteAdMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type DeleteAdMutation = { __typename?: 'Mutation', deleteAd: string };

export type EditAdMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  title: Scalars['String']['input'];
  description: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  imgUrl: Scalars['String']['input'];
}>;


export type EditAdMutation = { __typename?: 'Mutation', editAd: { __typename?: 'Ad', id: number, title: string, description: string, owner: string, price: number, imgUrl: string } };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', category: Array<{ __typename?: 'Category', id: number, title: string }> };


export const AdsQueryDocument = gql`
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

/**
 * __useAdsQueryQuery__
 *
 * To run a query within a React component, call `useAdsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdsQueryQuery(baseOptions?: Apollo.QueryHookOptions<AdsQueryQuery, AdsQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdsQueryQuery, AdsQueryQueryVariables>(AdsQueryDocument, options);
      }
export function useAdsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdsQueryQuery, AdsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdsQueryQuery, AdsQueryQueryVariables>(AdsQueryDocument, options);
        }
export function useAdsQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdsQueryQuery, AdsQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdsQueryQuery, AdsQueryQueryVariables>(AdsQueryDocument, options);
        }
export type AdsQueryQueryHookResult = ReturnType<typeof useAdsQueryQuery>;
export type AdsQueryLazyQueryHookResult = ReturnType<typeof useAdsQueryLazyQuery>;
export type AdsQuerySuspenseQueryHookResult = ReturnType<typeof useAdsQuerySuspenseQuery>;
export type AdsQueryQueryResult = Apollo.QueryResult<AdsQueryQuery, AdsQueryQueryVariables>;
export const AdQueryDocument = gql`
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

/**
 * __useAdQueryQuery__
 *
 * To run a query within a React component, call `useAdQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdQueryQuery(baseOptions: Apollo.QueryHookOptions<AdQueryQuery, AdQueryQueryVariables> & ({ variables: AdQueryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdQueryQuery, AdQueryQueryVariables>(AdQueryDocument, options);
      }
export function useAdQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdQueryQuery, AdQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdQueryQuery, AdQueryQueryVariables>(AdQueryDocument, options);
        }
export function useAdQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdQueryQuery, AdQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdQueryQuery, AdQueryQueryVariables>(AdQueryDocument, options);
        }
export type AdQueryQueryHookResult = ReturnType<typeof useAdQueryQuery>;
export type AdQueryLazyQueryHookResult = ReturnType<typeof useAdQueryLazyQuery>;
export type AdQuerySuspenseQueryHookResult = ReturnType<typeof useAdQuerySuspenseQuery>;
export type AdQueryQueryResult = Apollo.QueryResult<AdQueryQuery, AdQueryQueryVariables>;
export const PostAdDocument = gql`
    mutation PostAd($title: String!, $description: String!, $owner: String!, $price: Float!, $imgUrl: String!, $location: String!, $category: String!, $tags: String!) {
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
export type PostAdMutationFn = Apollo.MutationFunction<PostAdMutation, PostAdMutationVariables>;

/**
 * __usePostAdMutation__
 *
 * To run a mutation, you first call `usePostAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postAdMutation, { data, loading, error }] = usePostAdMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      owner: // value for 'owner'
 *      price: // value for 'price'
 *      imgUrl: // value for 'imgUrl'
 *      location: // value for 'location'
 *      category: // value for 'category'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function usePostAdMutation(baseOptions?: Apollo.MutationHookOptions<PostAdMutation, PostAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostAdMutation, PostAdMutationVariables>(PostAdDocument, options);
      }
export type PostAdMutationHookResult = ReturnType<typeof usePostAdMutation>;
export type PostAdMutationResult = Apollo.MutationResult<PostAdMutation>;
export type PostAdMutationOptions = Apollo.BaseMutationOptions<PostAdMutation, PostAdMutationVariables>;
export const DeleteAdDocument = gql`
    mutation DeleteAd($id: Float!) {
  deleteAd(id: $id)
}
    `;
export type DeleteAdMutationFn = Apollo.MutationFunction<DeleteAdMutation, DeleteAdMutationVariables>;

/**
 * __useDeleteAdMutation__
 *
 * To run a mutation, you first call `useDeleteAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdMutation, { data, loading, error }] = useDeleteAdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdMutation, DeleteAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdMutation, DeleteAdMutationVariables>(DeleteAdDocument, options);
      }
export type DeleteAdMutationHookResult = ReturnType<typeof useDeleteAdMutation>;
export type DeleteAdMutationResult = Apollo.MutationResult<DeleteAdMutation>;
export type DeleteAdMutationOptions = Apollo.BaseMutationOptions<DeleteAdMutation, DeleteAdMutationVariables>;
export const EditAdDocument = gql`
    mutation EditAd($id: Float!, $title: String!, $description: String!, $owner: String!, $price: Float!, $imgUrl: String!) {
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
export type EditAdMutationFn = Apollo.MutationFunction<EditAdMutation, EditAdMutationVariables>;

/**
 * __useEditAdMutation__
 *
 * To run a mutation, you first call `useEditAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editAdMutation, { data, loading, error }] = useEditAdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      owner: // value for 'owner'
 *      price: // value for 'price'
 *      imgUrl: // value for 'imgUrl'
 *   },
 * });
 */
export function useEditAdMutation(baseOptions?: Apollo.MutationHookOptions<EditAdMutation, EditAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditAdMutation, EditAdMutationVariables>(EditAdDocument, options);
      }
export type EditAdMutationHookResult = ReturnType<typeof useEditAdMutation>;
export type EditAdMutationResult = Apollo.MutationResult<EditAdMutation>;
export type EditAdMutationOptions = Apollo.BaseMutationOptions<EditAdMutation, EditAdMutationVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  category {
    id
    title
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export function useGetCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetCategoriesSuspenseQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;