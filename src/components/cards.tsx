import { salad1, salad2, salad3 } from '@/assets'
import { Box, Button, Text } from '@chakra-ui/react'
import Image from "next/image"

const Cards = () => {
    
  return (
    <Box w={{base: '80%', md: '85%'}} className="center" pt={{base: '120px', md: '200px'}}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'10px'}>
            <Text textAlign={'center'} fontSize={{base: '40px', md: '54px'}} fontWeight={{base: '450', md: '750'}} lineHeight={'normal'}>Special Dishes for you</Text>
            <Text textAlign={'center'} fontSize={{base: '20px', md: '24px'}} color={'#3B433E'} fontWeight={{base: '450', md: '750'}} lineHeight={'34px'}>Made with premium & 100% Organic ingredients</Text>
        </Box>
      <Box gap={{base :"2rem",md: '0'}} pt={'90px'} display={'flex'} flexDirection={{base: 'column', md:'row'}} alignItems={'center'} justifyContent={'space-around'}>

        
        <Box gap={'1.6rem'} flexDirection={'column'} w={{base: '100%', md: '356px'}} h={'520px'} border={'1px'} borderColor={'#3B433E'} borderRadius={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Image src={salad1} alt='img not found'></Image>
            <Text  fontSize={{base: '26px', md: '30px'}} lineHeight={'normal'}  color={'#181D19'} fontWeight={{base: '450', md: '750'}} > Green Salad</Text>
            <Text textAlign={'center'} w={'250px'} lineHeight={'28px'} fontSize={{base: '14px', md: '18px'}} color={'#39463F'} fontWeight={{base: '450', md: '750'}} >A salad combined witha delicious
            cut of bacon and mixed with tasty
            and fresh sesome oil.</Text>
        </Box>


        <Box gap={'1.6rem'} flexDirection={'column'} w={{base: '100%', md: '356px'}} h={'520px'} boxShadow={'10px 20px 70px 0px rgba(71, 68, 68, 0.08), -15px -50px 81px 0px #FFF;'} borderRadius={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Image src={salad2} alt='img not found'></Image>
            <Text  fontSize={{base: '26px', md: '30px'}} lineHeight={'normal'}  color={'#181D19'} fontWeight={{base: '450', md: '750'}} >Beef Salad</Text>
            <Text textAlign={'center'} w={'250px'} lineHeight={'28px'} fontSize={{base: '14px', md: '18px'}} color={'#39463F'} fontWeight={{base: '450', md: '750'}} >A salad combined witha delicious
            cut of bacon and mixed with tasty
            and fresh sesome oil.</Text>
        </Box>
        <Box gap={'1.6rem'} flexDirection={'column'} w={{base: '100%', md: '356px'}} h={'520px'} border={'1px'} borderColor={'#3B433E'} borderRadius={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Image src={salad3} alt='img not found'></Image>
            <Text  fontSize={{base: '26px', md: '30px'}} lineHeight={'normal'}  color={'#181D19'} fontWeight={{base: '450', md: '750'}} >Nut Salad</Text>
            <Text textAlign={'center'} w={'250px'} lineHeight={'28px'} fontSize={{base: '14px', md: '18px'}} color={'#39463F'} fontWeight={{base: '450', md: '750'}} >A salad combined witha delicious
            cut of bacon and mixed with tasty
            and fresh sesome oil.</Text>
        </Box>
      </Box>

    
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} pt={{base: '35px', md: '70px'}}>

      <Button  borderRadius={'50px'} fontSize={{base :'18px', md: '20px'}} bg={'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, #64BB47 0%, #2C9553 100%)'} w={{base :'170px', md: '210px'}} h={{base: '50px', md: '64px'}} color={'#fff'} >View All</Button>
    </Box>
    </Box>

    
  )
}

export default Cards
