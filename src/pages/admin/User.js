import SearchBar from "../../components/admin/SearchBar";
import SideBarAdmin from "../../components/admin/SideBarAdmin";
import TableUser from "../../components/admin/TableUser";
export default function User() {
  return (
    <div className="flex  justify-start relative  m-0">
      <SideBarAdmin />
      <div className="flex flex-col p-1 mr-10 relative w-full pl-20">
        <SearchBar />
        <TableUser />
      </div>
    </div>
  );
}
