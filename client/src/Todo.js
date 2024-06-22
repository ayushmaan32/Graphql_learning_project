import { useQuery, gql } from "@apollo/client";

const query = gql`
  query GetTodoWithUsers {
    tracksForHome {
      id
      title
      user {
        name
      }
    }
  }
`;
export const Todo = () => {
  const { loading, error, data } = useQuery(query);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <table>
        <tbody>
          {data.tracksForHome.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo?.user?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
