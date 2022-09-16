import styled from "styled-components";
import { useEffect, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import MessageContext from "../../contexts/MessageContext";
import { getProductDescription } from "../../services/backtothedisc";


export default function Description () {
    const { productId } = useParams();
    const [description, setDescription] = useState({});

    useLayoutEffect(() => {
        setDescription(getProductDescription(productId));
    }, [productId]);

    return (
        <div></div>
    );
}