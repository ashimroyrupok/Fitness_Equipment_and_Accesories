import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BiEdit } from "react-icons/bi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";

const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="bg-green-100 text-center lg:text-left text-green-800 text-sm font-normal mr-2 px-2 lg:px-2.5 py-[3px] rounded cursor-pointer ">
          <BiEdit className=" text-[22px]" />
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center w-full gap-2">
            <div className="flex-1">
              <Label htmlFor="name" className="text-right">
                Product Name
              </Label>
              <Input
                id="name"
                defaultValue=""
                className="border border-black w-full"
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                defaultValue=""
                className="border border-black w-full"
              />
            </div>
          </div>
          <div className="flex items-center w-full gap-2">
            <div className="flex-1">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Select>
                <SelectTrigger className="border border-black w-full">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="stock" className="text-right">
                Availability
              </Label>
              <Input
                id="availability"
                type="number"
                defaultValue=""
                className="border border-black w-full"
              />
            </div>
          </div>

          <div className="flex-1">
            <Label htmlFor="image" className="text-right">
              Image Link
            </Label>
            <Input
              id="name"
              defaultValue=""
              className="border border-black w-full"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea className="border border-black w-full" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
