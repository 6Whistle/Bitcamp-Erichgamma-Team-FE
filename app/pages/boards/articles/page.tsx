'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ArticlesRows from "@/app/component/rows/articles-rows";
import ArticlesColumns from "@/app/component/columns/articles-columns";

export default function Articles(){
        return (
            <>
            <h2>Articles</h2>
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={ArticlesRows()}
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