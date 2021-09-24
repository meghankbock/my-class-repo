import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
{
    books {
        title
        author
        pages
    }
}
`;
