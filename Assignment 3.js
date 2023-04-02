
<script>
{

    let sum = 0;
 

    for (let i = 1; i <= n; ++i) 

    {
 

        

       

        for (let j = 1; j * j <= i; ++j) 

        {

            if (i % j == 0) 

            {

                if (i / j == j)

                    sum += j;

                else

                    sum += j + i / j;

            }

        }

    }

    return sum;
}

</script>