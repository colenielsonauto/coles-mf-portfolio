import { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { X, Mail, Copy, Instagram, Linkedin } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ProjectContactModalProps {
  projectTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectContactModal({ projectTitle, isOpen, onClose }: ProjectContactModalProps) {
  const copyEmail = () => {
    navigator.clipboard.writeText('colenielson6@gmail.com');
    toast.success('Email copied to clipboard');
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="sm:max-w-sm">
        <Button
          className="absolute right-4 top-4 h-8 w-8 p-0"
          variant="ghost"
          size="icon"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        
        <AlertDialogHeader>
          <AlertDialogTitle>Interest in {projectTitle}</AlertDialogTitle>
        </AlertDialogHeader>
        
        <div className="py-4 space-y-4">
          <p className="text-sm text-muted-foreground">
            To discuss this project further, please message me via:
          </p>
          
          <div className="flex items-center space-x-3">
             <span className="font-medium text-sm flex-shrink-0">Email:</span>
             <div className="flex items-center gap-2 bg-muted p-2 rounded flex-grow min-w-0">
               <code className="text-sm truncate flex-grow">colenielson6@gmail.com</code>
               <TooltipProvider delayDuration={0}>
                 <Tooltip>
                   <TooltipTrigger asChild>
                     <Button 
                       variant="ghost" 
                       size="icon" 
                       className="h-6 w-6 flex-shrink-0" 
                       onClick={copyEmail}
                     >
                       <Copy className="h-4 w-4" />
                       <span className="sr-only">Copy email address</span>
                     </Button>
                   </TooltipTrigger>
                   <TooltipContent>
                     <p>Copy email</p>
                   </TooltipContent>
                 </Tooltip>
               </TooltipProvider>
             </div>
          </div>

          <div className="flex items-center justify-center space-x-4 pt-2">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <a href="https://www.instagram.com/colenielson.ai" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                     <a href="https://www.linkedin.com/in/cole-nielson-b05724196/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
