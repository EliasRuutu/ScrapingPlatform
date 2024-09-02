"use client";
import moment from "moment";
import dynamic from "next/dynamic";
import SubHeadder from "@/app/components/admin/opportunity/SubHeader";
import { useEffect, useState } from "react";
import { GetAll } from "@/actions/opportunity";
import { ObjectId } from "mongoose";
import EditModal, {
  OpportunityAddFormType,
} from "@/app/components/opportunities/EditModal";
import AddModal from "@/app/components/opportunities/AddModal";
const DataTable = dynamic(() => import("react-data-table-component"), {
  ssr: false,
});
interface DataType {
  _id: ObjectId;
  name: string;
  type?: string;
  provider: string;
  from: Date;
  to: Date;
  created: Date;
  status: string;
  amount: number;
}
const Page: React.FC = () => {
  const columns = [
    {
      name: "ID",
      selector: (row: any) => row._id,
    },
    {
      name: "Name",
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: "Provider",
      selector: (row: any) => row.provider,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row: any) => "$" + row.amount,
      sortable: true,
    },
    {
      name: "From",
      selector: (row: any) => moment(row.from).format("DD/MM/YYYY"),
      sortable: true,
    },
    {
      name: "To",
      selector: (row: any) => moment(row.to).format("DD/MM/YYYY"),
      sortable: true,
    },
    {
      name: "Created",
      selector: (row: any) => moment(row.created).format("DD/MM/YYYY"),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
      sortable: true,
    },
  ];
  const [opportunities, setOpportunities] = useState<DataType[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [isAddModal, setIsAddModal] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<OpportunityAddFormType>({
    name: "",
    type: "",
    from: "",
    to:"",
    amount: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      const opportunities = await GetAll();
      setOpportunities(opportunities);
    };
    fetchData();
  }, []);
  const openEditModal = () => {
    setIsEditModal(true);
  };
  const openAddModal = () => {
    setIsAddModal(true);
  };
  return (
    <div id="app">
      {selectedRow && (
        <EditModal
          isShow={isEditModal}
          data={selectedRow}
          closeModal={() => {
            setIsEditModal(false);
          }}
        />
      )}
      <AddModal
        isShow={isAddModal}
        closeModal={() => {
          setIsAddModal(false);
        }}
      />
      <DataTable
        columns={columns}
        data={opportunities}
        pagination
        selectableRows
        selectableRowsSingle
        onSelectedRowsChange={(e) => {
          setSelectedRow(e.selectedRows[0] as OpportunityAddFormType);
          setIsEdit(e.selectedCount === 1);
        }}
        // actions={<button>Add</button>}
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <SubHeadder
            onClickEdit={openEditModal}
            onClickAdd={openAddModal}
            isEdit={isEdit}
          />
        }
      />
    </div>
  );
};
// export async function getServerSideProps(){
//   const opportunities = await GetAll();
//   return {
//     props:{
//       opportunities
//     }
//   }
// }
export default Page;
