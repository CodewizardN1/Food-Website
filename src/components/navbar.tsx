import { Box, Button, Text, useDisclosure, } from '@chakra-ui/react'
import {logo} from '.././assets'
import Image from 'next/image'
import Link from 'next/link'
import { Search2Icon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { useState } from 'react'
const Navbar = () => {
    const [size, setSize] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['xs']
  return (
    <Box pb={'15px'}>
    <Box display={{base: 'none', md: 'flex'}}>
    <Box w={'90%'} className='center' h={'10vh'} >
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} pt={'20px'}>
            <Box>
                <Image src={logo} alt='img not found'></Image>
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={'2em'}>
                <Link id='active' href={'#home'}>Home</Link>
                <Link id='active' href={'#'}>About</Link>
                <Link id='active' href={'#'}>Contact</Link>
                <Link id='active' href={'#'}>Testimonials</Link>
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={'1.3rem'}>
                <Search2Icon color={'#181D19'} />
                <Text color={'#181D19'}><i className="fa-sharp fa-solid fa-cart-shopping"></i></Text>
                <Button bg={'#494949'} borderRadius={'25px'} color={'#fff'}>Order Now</Button>
            </Box>
        </Box>
    </Box>

    </Box>



    {/* responsive only */}


    <Box display={{base: 'flex', md: 'none'}}>
        <Box w={'80%'} className='center' h={'8vh'} >
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box>
                    <Image src={logo} alt='img not found'></Image>
                </Box>
                <Box>
                {sizes.map((size) => (
        <Button fontSize={'22px'}
          onClick={() => handleClick(size)}
          key={size}
          m={4}
        ><i className="fa-sharp fa-solid fa-bars-staggered"></i></Button>
      ))}

                <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton bg={'transparent'} color={'red'} pt={'5px'}/>
          <DrawerHeader><Image src={logo} alt='img is not defined'></Image></DrawerHeader>
          <hr />
          <DrawerBody>
          <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Box display={'flex'} gap={'1rem'} alignItems={'center'}>
                <Search2Icon color={'#181D19'} />
                <Text color={'#181D19'}><i className="fa-sharp fa-solid fa-cart-shopping"></i></Text>
                </Box>
                <Box>
                <Button w={'100px'} h={'40px'} fontSize={'15px'} bg={'#494949'} borderRadius={'25px'} color={'#fff'}>Order Now</Button>
                </Box>
            </Box>
          <Box pt={'20px'} display={'flex'} alignItems={'center'} gap={'2em'} flexDirection={'column'}>
                <Link id='active' href={'#home'}>Home</Link>
                <Link id='active' href={'#'}>About</Link>
                <Link id='active' href={'#'}>Contact</Link>
                <Link id='active' href={'#'}>Testimonials</Link>
            </Box>


           
          </DrawerBody>
        </DrawerContent>
      </Drawer>
                </Box>
            </Box>

        </Box>
    </Box>

    <Box display={{base: 'flex', md: 'none'}} mt={'15px'} bg={'#000'}> <hr /></Box>
    </Box>
    
  )
}

export default Navbar
