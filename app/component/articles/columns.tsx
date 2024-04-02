import { GridColDef } from "@mui/x-data-grid";
import { render } from "react-dom";

export default function ArticlesColumns({data}: any): GridColDef[]{
    return [
        { 
            field: 'id',
            headerName: 'ID', 
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            renderCell(){
                return <></>
            }
        },
        { 
            field: 'title', 
            headerName: 'Title',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            renderCell(){
                return <></>
            }
        },
        { 
            field: 'content', 
            headerName: 'Content',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            renderCell(){
                return <></>
            }
        },
        { 
            field: 'writer', 
            headerName: 'Writer',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            renderCell(){
                return <></>
            }
        },
        { 
            field: 'registerDate', 
            headerName: 'Register Date',
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            renderCell(){
                return <></>
            }
        },
    ]
}
