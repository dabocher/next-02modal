"use client";

import { useRef, ReactNode, useCallback, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import CloseIcon from "../CloseIcon";

const ModalB = ({ children }: { children: ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (event.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  return (
    <div aria-labelledby="modal-title" aria-modal="true" className="modal">
      <div
        ref={overlay}
        onClick={handleClick}
        className="flex justify-center items-center min-h-screen bg-black/20 "
      >
        <div ref={wrapper} className="modal_wrapper">
          <CloseIcon onDismiss={onDismiss} />

          {children}
        </div>
      </div>
    </div>
  );
};
export default ModalB;
