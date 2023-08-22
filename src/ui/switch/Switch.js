import './Switch.css';
import {useEffect, useState} from "react";

function Switch(props) {
    const [pages, setPages] = useState({
        currentPage: props.currentPage,
        totalPages: props.totalPages,
    });

    useEffect(() => {
        setPages({
            currentPage: props.currentPage,
            totalPages: props.totalPages,
        })
    }, [props.currentPage, props.totalPages]);

    let navigation = [];

    if (pages.totalPages > 8) {

        if (pages.currentPage === 1){
            navigation.push(<button className="page-item" onClick={() =>
                props.onPageChange(1)} key={1}>{1}</button>)
        }
        else {
            navigation.push(<button className="page-item" onClick={() =>
                props.onPageChange(1)} key={1}>{1}</button>)
        }

        if (pages.currentPage > 3) {
            navigation.push(<span key={'before'}>...</span>)
        }

        if (pages.currentPage - 1 !== 1 && pages.currentPage - 1 !== 0) {
            navigation.push(<button className="page-item" onClick={() =>
                props.onPageChange(pages.currentPage - 1)} key={pages.currentPage - 1}>
                {pages.currentPage - 1}</button>)
        }

        if (pages.currentPage !== 1 && pages.currentPage !== pages.totalPages) {
            navigation.push(<button className="page-item" key={pages.currentPage}>
                {pages.currentPage}</button>)
        }

        if (pages.currentPage + 1 !== pages.totalPages && pages.currentPage + 1 < pages.totalPages) {
            navigation.push(<button className="page-item" onClick={() =>
                props.onPageChange(pages.currentPage + 1)} key={pages.currentPage + 1}>
                {pages.currentPage + 1}</button>)
        }

        if (pages.currentPage === 1) {
            navigation.push(<button className="page-item" onClick={() =>
                props.onPageChange(pages.currentPage + 2)} key={pages.currentPage + 2}>
                {pages.currentPage + 2}</button>)
        }

        if (pages.currentPage <= pages.totalPages-3) {
            navigation.push(<span key={'beforeNext'}>...</span>)
        }

        if (pages.currentPage === pages.totalPages) {
            navigation.push(<button className="page-item" onClick={() =>
                props.onPageChange(pages.totalPages)} key={pages.totalPages}>
                {pages.totalPages}</button>)
        } else {
            navigation.push(<button className="page-item" onClick={() =>
                props.onPageChange(pages.totalPages)} key={pages.totalPages}>
                {pages.totalPages}</button>)
        }
    }
    else {
        for (let i = 1; i < pages.totalPages+1; i++) {
            if (pages.currentPage === i){
                navigation.push(<button className="page-item" key={i} onClick={() =>
                    props.onPageChange(i)}>{i}</button>)
            } else {
                navigation.push(<button className="page-item" key={i} onClick={() =>
                    props.onPageChange(i)}>{i}</button>)
            }
        }
    }

    return (
        <div className="pages">
            {navigation}
        </div>
    )
}

export default Switch;