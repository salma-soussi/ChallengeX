import SearchBar from "../../components/admin/SearchBar";
import Card from "../../components/admin/Card";
import SideBarAdmin from "../../components/admin/SideBarAdmin";

export default function Project() {
  return (
    <div className="flex  justify-start relative  m-0">
    <SideBarAdmin />
    <div className="flex flex-col p-1 relative w-full pl-20">
      <SearchBar />

      <div className="grid grid-cols-1 sm::grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-4 self-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
  );
}
