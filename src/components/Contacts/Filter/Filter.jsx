import PropTypes from 'prop-types';
import {SelectTitle, SelectInput} from './Filter.styled';


export function Filter({ findContact, serchName }) {
    return <><SelectTitle> Find contacts by name</SelectTitle> 
        <SelectInput type="text" name="serch" value={serchName} onChange={findContact}/>
          </>
}

Filter.propTypes = {
    findContact: PropTypes.func.isRequired,
    serchName: PropTypes.string.isRequired,

};