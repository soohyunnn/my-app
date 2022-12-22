import React, { useState } from "react";
import { AlertDialog, Button } from "react-onsenui";

export default function AlertExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
      <AlertDialog isOpen={isOpen} onCancel={() => setIsOpen(false)} cancelable>
        <div className="alert-dialog-title">Warning</div>
        <div className="alert-dialog-title">Error</div>
        <div className="alert-dialog-title">
          <Button
            className="alert-dialog-button"
            onClick={() => setIsOpen(false)}
          >
            Cancle
          </Button>
          <Button className="alert-dialog-button">Ok</Button>
        </div>
      </AlertDialog>
    </div>
  );
}
