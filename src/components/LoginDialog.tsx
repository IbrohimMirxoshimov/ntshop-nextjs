import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/types";

export default function LoginDialog() {
  const [open, setOpen] = useState(false);
  const name = useSelector((state: RootState) => {
    return state.auth.user?.name;
  });
  return (
    <>
      {name ? (
        <Button>{name}</Button>
      ) : (
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Login
        </Button>
      )}

      <Dialog
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>
          <LoginForm
            onOpenChange={(open) => {
              setOpen(open);
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
