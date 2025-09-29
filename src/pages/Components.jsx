import { useSearchParams } from "react-router-dom";

const Comments = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("jsLibrary"));
  return (
    <div>
      <h1>Comments</h1>

      <select
        onChange={(e) => setSearchParams({ jsLibrary: e.target.value })}
        value={searchParams.get("jsLibrary") || ""}
      >
        <option value="React 1">React 1</option>
        <option value="React 2">React 2</option>
        <option value="React 3">React 3</option>
        <option value="React 4">React 4</option>
        <option value="React 5">React 5</option>
      </select>
    </div>
  );
};

export default Comments;
