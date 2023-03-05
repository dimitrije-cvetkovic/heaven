"use client"

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button
} from '@chakra-ui/react'
import { IPostsTableProps } from "@/types/views";



// `app/page.js` is the UI for the root `/` URL
export default function PostsTable({ posts, page, nextPage, goToNextPage, previousPage, goToPreviousPage, deletePost }: IPostsTableProps) {
  return <TableContainer width="100%" maxWidth="100%">
          <Table size='sm'>
            <Thead>
              <Tr>
                <Th isNumeric>Id</Th>
                <Th>Title</Th>
                <Th>Body</Th>
                <Th>User Id</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {posts?.map((post) => {
                return <Tr key={post.id}>
                  <Td isNumeric width="20%">{post.id}</Td>
                  <Td width="20%">{post.title}</Td>
                  <Td width="20%">{post.body}</Td>
                  <Td width="20%">{post.userId}</Td>
                  <Td width="20%"><Button colorScheme='blue' onClick={() => deletePost(post.id)}>Delete post</Button></Td>
                </Tr>
              })}
            </Tbody>
            <Tfoot>
                <Button colorScheme='blue' isDisabled={page === previousPage} onClick={goToPreviousPage}>Previous</Button>
                <span>Page: {page + 1}</span>
                <Button colorScheme='blue' isDisabled={page === nextPage} onClick={goToNextPage}>Next</Button>
            </Tfoot>
          </Table>
        </TableContainer>
}