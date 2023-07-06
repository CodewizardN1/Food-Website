import { man1, man2 } from '@/assets'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'


const Clients = () => {
  return (
    <Box w={'100%'} bg={'#FCFCFC'} h={{base: '920px', md: '677px'}} mt={'50px'}>
    <Box pt={'20px'}>
        <Text textAlign={'center'} fontSize={{base: '40px', md: '54px'}} fontWeight={{base: '450', md: '750'}} lineHeight={'normal'}>Happy Clients Says</Text>
    </Box>
    <Box  w={{base: '80%', md: '85%'}} className="center" pt={{base: '90px', md: '100px'}}>
      <Box display={'flex'} flexDirection={{base: 'column', md: 'row'}} justifyContent={'space-evenly'} gap={{base: '2rem', md: '0'}}>
        <Box pt={'40px'} pl={'20px'} borderRadius={'20px'} bg={'#fff'} w={{base :'100%', md: '514px'}} h={'347px'} className='shd'>
            <Box display={'flex'} alignItems={'center'} gap={'1rem'}>
                <Box>
                    <Image src={man1} alt='img not found'></Image>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'0.3em'}>
                    <Text fontSize={{base: '18px', md: '22px'}} fontWeight={{base: '450', md: '750'}} lineHeight={'normal'}>KHALIL NAZIR</Text>
                    <Text color={'#888A9A'}>CEO of UI.Desk</Text>
                </Box>
            </Box>

            <Box w={{base: '90%', md: '470px'}} pt={'50px'}>
                <Text fontSize={{base: '15px', md: '18px'}} color={'#181D19'} fontWeight={{base: '450', md: '750'}} lineHeight={'normal'}>Thirty for remove plenty regard you summer though. He preference Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we.</Text>
            </Box>
        </Box>
        <Box pt={'40px'} pl={'20px'} borderRadius={'20px'} bg={'#fff'} w={{base :'100%', md: '514px'}} h={'347px'} className='shd'>
            <Box display={'flex'} alignItems={'center'} gap={'1rem'}>
                <Box>
                    <Image src={man2} alt='img not found'></Image>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'0.3em'}>
                    <Text fontSize={{base: '18px', md: '22px'}} fontWeight={{base: '450', md: '750'}} lineHeight={'normal'}>ZEESHAN ANWER</Text>
                    <Text color={'#888A9A'}>CEO of UI Box</Text>
                </Box>
            </Box>

            <Box w={{base: '90%', md: '460px'}} pt={'50px'}>
                <Text fontSize={{base: '15px', md: '18px'}} color={'#181D19'} fontWeight={{base: '450', md: '750'}} lineHeight={'normal'}>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</Text>
            </Box>
        </Box>
      </Box>
    </Box>

    
    </Box>
  )
}

export default Clients
