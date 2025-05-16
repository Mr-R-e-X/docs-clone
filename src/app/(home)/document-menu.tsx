import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, FilePenIcon, MoreVerticalIcon, TrashIcon } from 'lucide-react';
import { Id } from '../../../convex/_generated/dataModel';
import { DropdownMenu, DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { RemoveDialog } from '@/components/remove-dialog';
import { RenameDialog } from '@/components/rename-dialog';

interface DocumentMenuProps {
  documentId: Id<'documents'>;
  title: string;
  onNewTab: (id: Id<'documents'>) => void;
}

export const DocumentMenu = ({ documentId, title, onNewTab }: DocumentMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'icon'} className="rounded-full">
          <MoreVerticalIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <RenameDialog documentId={documentId} initialTitle={title}>
          <DropdownMenuItem
            className="flex flex-row items-center hover:bg-muted hover:outline-none hover:cursor-pointer focus:outline-none border-none"
            onSelect={(e) => e.preventDefault()}
            onClick={(e) => e.stopPropagation()}
          >
            <FilePenIcon className="size-4 mr-2" />
            <span>Rename</span>
          </DropdownMenuItem>
        </RenameDialog>
        <RemoveDialog documentId={documentId}>
          <DropdownMenuItem
            className="flex flex-row items-center hover:bg-muted hover:outline-none hover:cursor-pointer focus:outline-none border-none"
            onSelect={(e) => e.preventDefault()}
            onClick={(e) => e.stopPropagation()}
          >
            <TrashIcon className="size-4 mr-2" />
            <span>Remove</span>
          </DropdownMenuItem>
        </RemoveDialog>
        <DropdownMenuItem
          onClick={() => onNewTab(documentId)}
          className="flex flex-row items-center hover:bg-muted hover:outline-none hover:cursor-pointer focus:outline-none border-none"
        >
          <ExternalLinkIcon className="size-4 mr-2" />
          <span>Open in a new tab</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
