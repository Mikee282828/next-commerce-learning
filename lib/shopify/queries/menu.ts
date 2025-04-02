export const getMenuQuery = /* GraphQL query */ `
  query getMen($handle: String!){
    menu(handle: $handle){
      items{
        title
        url
      }
    }
  }
`;