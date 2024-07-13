import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AiOutlineDelete } from "react-icons/ai";

import Modal from "../modal/Modal";
import { useDeleteProductMutation, useGetProductsQuery } from "@/redux/api/api";
import { TProducts } from "@/types";
import toast, { Toaster } from "react-hot-toast";

const AllProducts = () => {
  const { data, isLoading } = useGetProductsQuery("");

  const [deleteProduct] = useDeleteProductMutation();
  // const {order} = useor

  const handleDelete = (id: any) => {
    deleteProduct(id).then(() => toast.success("Product deleted successfully"));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[250px]">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite]  mx-auto text-center rounded-full border-4 border-r-[#3B9DF8] border-[#3b9df84b]"></div>
      </div>
    );
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">Name</TableHead>
            <TableHead className="text-center">Category</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-center mx-auto">
          {data?.data?.map((item: TProducts, idx: number) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="font-medium">{item.category}</TableCell>
              <TableCell className="font-medium">${item.price}</TableCell>

              <TableCell className="text-center flex items-center gap-2 justify-center">
                <Modal />
                <span
                  onClick={() => handleDelete(item._id)}
                  className="bg-green-100 text-center lg:text-left text-green-800 text-sm font-normal mr-2 px-2 lg:px-2.5 py-[3px] rounded cursor-pointer "
                >
                  <AiOutlineDelete className="text-red-600 text-[22px]" />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Toaster />
      {/* modal */}
    </div>
  );
};

export default AllProducts;
