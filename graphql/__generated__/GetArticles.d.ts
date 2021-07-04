/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticles
// ====================================================

export interface GetArticles_articles {
  __typename: "articles";
  content: string;
  picture_href: string;
  id: number;
  title: string;
  user_id: string | null;
}

export interface GetArticles {
  /**
   * fetch data from the table: "articles"
   */
  articles: GetArticles_articles[];
}
