import { Box, Grid, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box w={"100%"} bg={"#FCFCFC"} h={{base: '100%', md :"440px"}}>
      <Box w={{ base: "80%", md: "85%" }} className="center" >
        <Grid gap={{base: '18px', md: '0'}} pl={{base: '0', md: '100px'}} rowGap={'2rem'} justifyContent={'center'} pt={{base: '20px', md: '130px'}} alignItems={'center'} templateColumns={{base: 'repeat(2, 1fr)', md: ' repeat(5, 1fr)'}} flexDirection={{base: 'column',md: 'row'}}>
            <Box pb={{base: '30px', md: '0'}} display={'flex'} flexDirection={'column'} gap={'1.8rem'} >
                <Text color={'#2C3847'} fontSize={{base:"22p", md: '26px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '770'}}>UI.desk</Text>
                <Text color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}} w={{base: '230px', md: '262px'}}>On formed merits hunted unable merely by mr whence or. </Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                <Text color={'#2C3847'} fontSize={{base:"22px", md: '26px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '770'}}>Home</Text>
                <Text pt={'5px'} color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}}>Company</Text>
                <Text color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}}>News</Text>
                <Text color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}}>Team</Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                <Text color={'#2C3847'} fontSize={{base:"20px", md: '22px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '770'}}>About</Text>
                <Text pt={'5px'} color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}}>History</Text>
                <Text color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}}>News</Text>
                <Text color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}}>Team</Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                <Text color={'#2C3847'} fontSize={{base:"20px", md: '22px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '770'}}>Partner</Text>
                <Text pt={'5px'} color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}}>Business</Text>
                <Text color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}}>Plan</Text>
                <Text color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}}>Marketing</Text>
            </Box>
            <Box pb={{base: '20px', md: '0'}} display={'flex'} flexDirection={'column'} gap={'1rem'}>
                <Text color={'#2C3847'} fontSize={{base:"20px", md: '22px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '770'}}>Contact</Text>
                <Text pt={'5px'} color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}}>UI.desk</Text>
                <Text color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}}>(465)954-8487</Text>
                <Text color={'#657582'} fontSize={{base:"14px", md: '16px'}} lineHeight={'normal'} fontWeight={{base: '440',md: '760'}}>Lahore, Pakistan</Text>
            </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
