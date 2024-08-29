"use client";

import dynamic from "next/dynamic";
import SubHeadder from "@/app/components/admin/opportunity/SubHeader";
import { useState } from "react";
const DataTable = dynamic(() => import("react-data-table-component"), {
  ssr: false,
});
const EditModal = dynamic(()=>import("@/app/components/opportunities/EditModal"), {ssr:false});
const AddModal = dynamic(()=>import("@/app/components/opportunities/AddModal"), {ssr:false})
interface DataType {
  id: number;
  name: string;
  provider: string;
  from: string;
  to: string;
  created: string;
  status: string;
  amount: number
}
const Page: React.FC = () => {
  const rows: DataType[] = [
    {
      id: 1,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 2,
      name: "Rust Support",
      provider: "Steve Jobs",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 3,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 4,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 5,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 6,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 7,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 8,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 9,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 10,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 11,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 12,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 13,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 14,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
    {
      id: 15,
      name: "Lorem sdeiKioeoskew",
      provider: "John Doe",
      amount: 300,
      from: "08/20/2024",
      to: "08/20/2024",
      created: "08/20/2024",
      status: "pending",
    },
  ];
  const columns = [
    {
      name: "ID",
      selector: (row: any) => row.id,
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
      selector: (row: any) => row.from,
      sortable: true,
    },
    {
      name: "To",
      selector: (row: any) => row.to,
      sortable: true,
    },
    {
      name: "Created",
      selector: (row: any) => row.created,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
      sortable: true,
    },
  ];
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false); 
  const [isAddModal, setIsAddModal] = useState<boolean>(false); 
  const openEditModal = () => {
    setIsEditModal(true);
  };
  const openAddModal = () => {
    setIsAddModal(true);
  };
  return (
    <div id="app">
      <EditModal isShow={isEditModal} closeModal={()=>{setIsEditModal(false)}}/>
      <AddModal isShow={isAddModal} closeModal={()=>{setIsAddModal(false)}}/>
      <DataTable
        columns={columns}
        data={rows}
        pagination
        selectableRows
        selectableRowsSingle
        onSelectedRowsChange={(e) => {
          setIsEdit(e.selectedCount === 1);
        }}
        // actions={<button>Add</button>}
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={<SubHeadder onClickEdit={openEditModal} onClickAdd={openAddModal} isEdit={isEdit} />}
      />
    </div>
  );
};
export default Page;
