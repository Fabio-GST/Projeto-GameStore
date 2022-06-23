import { Box ,TextField} from '@skynexui/components';


function HeaderHome() {
    return(
    <Box
        styleSheet={{
            display:'flex',
            height:'50px',
            backgroundColor: 'black',
            color: 'white',
        }}
    >
        <TextField
            styleSheet={{
                width:'500px',
                margin:'auto'
            }}
        />
    </Box>
    )
}
  
export default HeaderHome