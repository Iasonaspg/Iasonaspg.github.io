# Azure Windows Virtual Desktop

## Resource Structure

Azure Windows Virtual Desktop resources are grouped with a speciffic order

1. Virtual Desktop Tenant

   Tenant contains various resources and it is the highest level. An Azure Active Directory Tenant can have multiple Virtual Desktop Tenants.

2. Host pools

    Host pools are associated with speccific Tenants and contain the VMs pool.

3. AppGroups and Remote Apps

    They belong to a host pool

4. Session hosts

    Session hosts belong to host pools.

Useful [commands](https://docs.microsoft.com/en-us/powershell/module/windowsvirtualdesktop/).



