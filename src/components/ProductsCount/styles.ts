import { styled } from "../../styles";

export const LittleNumberUnderPack = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: '-3.5rem',
    marginTop: '-0.5rem',
    

    width: 24,
    height: 24,

    backgroundColor: '$green500',

    borderRadius: 9999,
    outline: '3px solid $gray900',

    fontSize: '$xsm',
    fontWeight: 'bold',

    zIndex: 1,
})