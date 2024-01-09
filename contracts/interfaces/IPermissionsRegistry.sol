// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

interface IPermissionsRegistry {
    function emergencyCouncil() external view returns(address);
    function skyTeamMultisig() external view returns(address);
    function hasRole(bytes memory role, address caller) external view returns(bool);
    function gaugeAdmin(address addr) external view returns(bool);
    function feeManager(address addr) external view returns(bool);
}