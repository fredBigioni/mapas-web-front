import { defineAbility } from '@casl/ability';
import { useSelector } from 'react-redux';



export default defineAbility((can, cannot) => {
    
    // const { auth } = useSelector( state => state.auth)

    // if( auth && auth.profiles && auth.profiles.indexOf("SAD") != -1){
        can('view', 'menu');
    // }
//   cannot('delete', 'User');
});