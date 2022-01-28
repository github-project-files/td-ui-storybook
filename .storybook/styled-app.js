import Styled from "styled-components";

const StyledApp = Styled.div`

    .header {
        font-family: ${({ theme }) => theme.fonts.medium};
        font-size: 30px;
        font-weight: normal;
    }

    .section-header {
        font-family: ${({ theme }) => theme.fonts.medium};
        font-size: 20px;
        font-weight: normal;
    }

    .section-sub-header {
        font-family: ${({ theme }) => theme.fonts.medium};
        font-size: 16px;
        font-weight: normal;
    }

    .paragraph-1 {
        font-family: ${({ theme }) => theme.fonts.regular};
        font-size: 18px;
        font-weight: normal;
    }

    .paragraph-2 {
        font-family: ${({ theme }) => theme.fonts.regular};
        font-size: 16px;
        font-weight: normal;
    }

    .paragraph-3 {
        font-family: ${({ theme }) => theme.fonts.regular};
        font-size: 14px;
        font-weight: normal;
    }

    .overline {
        font-family: ${({ theme }) => theme.fonts.regular};
        font-size: 12px;
        font-weight: normal;
    }
    .tag-text {
        font-family: ${({ theme }) => theme.fonts.regular};
        font-size: 11px;
        font-weight: normal;
    }
    .small-text{
        font-family: ${({ theme }) => theme.fonts.regular};
        font-size: 10px;
        font-weight: normal;
    }
`;

export default StyledApp;
