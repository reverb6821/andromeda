import * as React from 'react';

import useModalStore from '@/store/useModalStore'
import { useIsMobile } from '@/hooks/use-mobile'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button'
import LazyLogo from '@/components/lazy-logo'
import Logo from '@/assets/svg/logo.svg'

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

interface ModalProps {
    id: string
    title?: string
    description?: string
    children: React.ReactNode
    onClick?: () => void
    hideFooter?: boolean
    size?: ModalSize
}

const sizeMapper: Record<ModalSize, string> = {
  sm: 'max-w-[400px]',
  md: 'max-w-[600px]',
  lg: 'max-w-[800px]',
  xl: 'max-w-[1000px]',
  full: 'w-screen h-screen rounded-none',
}

export const Modal: React.FC<ModalProps> = ({ id, title, description, children, onClick, hideFooter,  size = 'md', }) => {
  const { modals, toggleModal } = useModalStore()
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const altTextLogo = t('header.menu.logoAlt')
  const sizeClass = sizeMapper[size] || sizeMapper['md']
  
  return (
    <React.Fragment>
      {isMobile ? (
        <React.Fragment>
          <Drawer
            open={modals[id]}
            onOpenChange={() => toggleModal(id)}
          >
            <DrawerContent className='flex flex-col justify-center items-center'>
              <DrawerHeader className="text-center justify-center items-center">
                <DrawerTitle>
                  {title ? title : (
                    <div className="flex items-center gap-2 justify-center">
                      {/* <img src={Logo} alt={altTextLogo} className="w-[50px] h-[50px]" />
                       */}
                      <LazyLogo src={Logo} alt={altTextLogo} className="w-[50px] h-[50px]" />
                                            aquariumnext
                    </div>
                  )}

                </DrawerTitle>
                <DrawerDescription>
                  {description}
                </DrawerDescription>
              </DrawerHeader>
              <div className={
                `p-4 flex flex-col justify-start items-center max-h-[50vh]
                ${!hideFooter ? 'm-2' : 'pt-2 m-2'} 
                overflow-y-auto overflow-x-hidden w-auto max-w-full`}
              >
                {children}
              </div>
              {!hideFooter && (
                <DrawerFooter className="pt-2">
                  <div className='flex flex-row space-x-4 items-center justify-center'>
                    <Button onClick={onClick}>
                        Confirm
                    </Button>
                    <DrawerClose asChild>
                      <Button
                        variant='outline'
                      >
                                                Cancel
                      </Button>
                    </DrawerClose>
                  </div>
                </DrawerFooter>
              )}
            </DrawerContent>
          </Drawer>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Dialog
            open={modals[id]}
            onOpenChange={() => toggleModal(id)}
          >
            <DialogContent className={`z-50 ${sizeClass} flex flex-col justify-start items-center`}>
              <DialogHeader>
                <DialogTitle className="flex items-center justify-center gap-4">
                  {title ? title : (
                    <div className="flex items-center gap-2 justify-center">
                      <LazyLogo src={Logo} alt={altTextLogo} className="w-[50px] h-[50px]" />
                        Aquariumnext
                    </div>
                  )}
                </DialogTitle>
                <DialogDescription className="text-center space-y-4">
                  {description}
                </DialogDescription>
              </DialogHeader>
              {/* <div className={
                `p-4 flex flex-col justify-start items-center max-h-[80vh]
                ${!hideFooter ? 'm-2' : 'pt-2 m-2'} 
                 w-auto max-w-full overflow-x-hidden overflow-y-auto`}
              >
                {children}
              </div> */}
              <div className={`${!hideFooter ? 'm-2' : 'pt-2 m-2'} overflow-y-auto overflow-x-hidden`}>
                {children}
              </div>
              {!hideFooter && (
                <DialogFooter >
                  <Button onClick={onClick}>
                                        Confirm
                  </Button>
                  <Button
                    variant='outline'
                    onClick={() => toggleModal(id)}
                  >
                                        Cancel
                  </Button>
                </DialogFooter>
              )}
            </DialogContent>
          </Dialog>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}  