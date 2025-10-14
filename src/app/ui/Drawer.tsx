import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer";
import Link from 'next/link';

export default function MyDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="bg-slate-900 text-white px-8 py-3 text-lg hover:brightness-105">
          お問い合わせ
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          {/* <DrawerDescription>この操作は取り消せません。</DrawerDescription> */}
        </DrawerHeader>
        {/* <div className="p-4 max-h-[70vh] overflow-y-auto"> */}
        {/*   <img */}
        {/*     src="/dance.webp" */}
        {/*     alt="demo" */}
        {/*     className="rounded-lg w-full h-auto" */}
        {/*   /> */}
        {/* </div> */}
        <DrawerFooter>
          <Button asChild className="bg-slate-900 text-white hover:brightness-105">
            <Link href="/contact">
              お問い合わせ
            </Link>

          </Button>
          <DrawerClose asChild>
            <Button variant="outline">キャンセル</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
