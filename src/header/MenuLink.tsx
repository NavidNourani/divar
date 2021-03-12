import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

const MenuBox = styled.div<{ MenuHumburger?: boolean }>`
    display: flex;
    flex-direction: ${(props) => (props.MenuHumburger ? 'column' : 'row')};

    background-color: ${(props) => (props.MenuHumburger ? 'var(--bg-clr-main)' : null)};
    border: ${(props) => (props.MenuHumburger ? 'var(--border-main)' : null)};
    border-radius: ${(props) => (props.MenuHumburger ? '.3rem' : null)};
    box-shadow: ${(props) => (props.MenuHumburger ? 'var(--box-shadow)' : null)};
`;

const Link = styled(LinkRouter)<{ MenuHumburger?: boolean }>`
    color: var(--font-clr-primary);
    padding: 0 0.8rem;
    transition: all 0.2s;
    &:hover {
        color: ${(props) => (props.MenuHumburger ? null : 'var(--font-clr-secondary)')};
    }
`;
const LinkHref = styled.a<{ MenuHumburger?: boolean }>`
    color: var(--font-clr-primary);
    padding: ${(props) => (props.MenuHumburger ? '1rem 1.2rem 1rem 7rem' : '0 0.8rem')};
    transition: all 0.2s;
    &:hover {
        color: ${(props) => (props.MenuHumburger ? null : 'var(--font-clr-secondary)')};
        background-color: ${(props) =>
            props.MenuHumburger ? 'var(--bg-clr-hover)' : null};
    }
`;

// const url = '';
const MenuLink: React.FunctionComponent<{ MenuHumburger?: boolean }> = ({
    MenuHumburger,
}) => {
    // const [loading, setLoading] = useState(true);
    // const [itemsMenu, setItemsMenu] = useState([]);

    // const fetchMenuList = async () => {
    //     try {
    //         const response = await fetch(url);
    //         const listMenu = await response.json();
    //         setItemsMenu(listMenu);

    //         setLoading(false);
    //     } catch (e) {
    //         setLoading(false);
    //         throw new Error('Error');
    //     }
    // };

    // useEffect(() => {
    //     fetchMenuList();
    // }, []);

    // if (loading) {
    //     return <div>loading</div>;
    // }

    return (
        <MenuBox MenuHumburger={MenuHumburger}>
            {/* {itemsMenu.map((item) => {
                return <Link to={}>{}</Link>;
            })} */}
            <LinkHref href="#" MenuHumburger={MenuHumburger}>
                دیوار من
            </LinkHref>
            <LinkHref href="#" MenuHumburger={MenuHumburger}>
                چت
            </LinkHref>
            <LinkHref href="#" MenuHumburger={MenuHumburger}>
                درباره‌ی دیوار
            </LinkHref>
            <LinkHref href="#" MenuHumburger={MenuHumburger}>
                بلاگ
            </LinkHref>
            <LinkHref href="#" MenuHumburger={MenuHumburger}>
                پشتیانی
            </LinkHref>
        </MenuBox>
    );
};

export default MenuLink;
