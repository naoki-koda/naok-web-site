import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function MyDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" className="bg-orange-400 text-white px-8 py-3 text-lg">お問い合わせ</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          {/* <DrawerDescription>この操作は取り消せません。</DrawerDescription> */}
        </DrawerHeader>
        <DrawerFooter>
          <Button asChild className="bg-orange-400 hover:bg-sky-400">
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
