"use client";

import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { IconX, IconCheck, IconInfoCircle } from "@tabler/icons-react";
import { applicants as initialApplicants } from "./data/applicants";
import { Applicant } from "./types/applicant";
import { ApplicantDrawer } from "./components/applicant-drawer";
import { ApplicantSummary } from "./components/applicant-summary";

export default function ApplicantCarousel() {
  const [applicants, setApplicants] = useState<Applicant[]>(initialApplicants);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitX, setExitX] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [accepted, setAccepted] = useState<Applicant[]>([]);
  const [rejected, setRejected] = useState<Applicant[]>([]);
  const [isReviewComplete, setIsReviewComplete] = useState(false);

  const removeApplicant = (direction: number) => {
    setExitX(direction);
    const currentApplicant = applicants[currentIndex];
    if (direction > 0) {
      setAccepted((prev) => [...prev, currentApplicant]);
    } else {
      setRejected((prev) => [...prev, currentApplicant]);
    }
    setApplicants((prev) => prev.filter((_, index) => index !== currentIndex));
    if (currentIndex === applicants.length - 1) {
      setCurrentIndex(0);
    }
    if (applicants.length === 1) {
      setIsReviewComplete(true);
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      removeApplicant(1);
    } else if (info.offset.x < -100) {
      removeApplicant(-1);
    }
  };

  if (isReviewComplete) {
    return <ApplicantSummary accepted={accepted} rejected={rejected} />;
  }

  if (applicants.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-medium text-muted-foreground">No more applicants to review</p>
      </div>
    );
  }

  const currentApplicant = applicants[currentIndex];

  return (
    <div className="h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, x: exitX * 100 }}
          transition={{ duration: 0.3 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          className="relative h-full w-full bg-white"
        >
          <Image
            src={currentApplicant.photo}
            alt={currentApplicant.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
          <div className="absolute top-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-medium">{currentApplicant.name}</h3>
                <p className="text-base">{currentApplicant.role}</p>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDrawerOpen(true)}
                className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-colors hover:bg-white/30"
                aria-label="View applicant details"
              >
                <IconInfoCircle className="h-6 w-6 text-white" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-8">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => removeApplicant(-1)}
          className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none"
        >
          <IconX className="h-8 w-8 text-red-500" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => removeApplicant(1)}
          className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none"
        >
          <IconCheck className="h-8 w-8 text-green-500" />
        </motion.button>
      </div>

      <ApplicantDrawer
        applicant={currentApplicant}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
}

