import { Box, Text } from '@chakra-ui/react'

const Copyright = () => {
  return (
    <Box w={'100%'} bg={'#64BB47'}>

    <Box w={{base: '80%', md : '90%'}} className='center' h={'6vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}> 
      <Text fontSize={{base: '14px', md: '16px'}} fontWeight={{base: '400', md: '740'}} color={'#ffff'}>© Copyright 2020 by ui.desk. All right reserved.</Text>
    </Box>
    </Box>
  )
}

export default Copyright
