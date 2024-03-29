'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ArticlesRows from "@/app/component/rows/articles-rows";
import ArticlesColumns from "@/app/component/columns/articles-columns";
import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { getAllArticles } from "@/redux/features/articles/article.service";


const ArticlesPage:NextPage = () => {

  const dispatch = useDispatch()
  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    dispatch(getAllArticles())
  }, [])
        return (
            <>
            <h2>Articles</h2>
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={articles}
                columns={ArticlesColumns()}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
            </>
          );
}

export default ArticlesPage